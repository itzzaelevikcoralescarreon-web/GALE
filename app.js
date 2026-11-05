/* GALE3 — versión local, sin servidor ni base de datos.
   Los datos permanecen exclusivamente en este navegador/perfil. */
const CLAVE_SOLICITUDES = 'licenciasEstudiantiles';
const WHATSAPP_DIRECTOR = '59172879841';
// Números oficiales de los asesores, código de país Bolivia (+591).
const ASESORES = Object.freeze({
  '1ero A': {nombre:'Alicia', telefono:'59167633233'},
  '1ero B': {nombre:'Ramosa', telefono:'59173406041'},
  '2do A': {nombre:'Elsa', telefono:'59163437550'},
  '2do B': {nombre:'Marlene', telefono:'59167615620'},
  '3ero A': {nombre:'Geydi', telefono:'59173467112'},
  '4to A': {nombre:'Mario', telefono:'59168611928'},
  '5to A': {nombre:'Fátima', telefono:'59175764366'},
  '6to A': {nombre:'Maribel', telefono:'59174449416'}
});
function fechaLocalISO(fecha = new Date()) {
  return `${fecha.getFullYear()}-${String(fecha.getMonth()+1).padStart(2,'0')}-${String(fecha.getDate()).padStart(2,'0')}`;
}
function leerSolicitudes() {
  try {
    const dato = JSON.parse(localStorage.getItem(CLAVE_SOLICITUDES) || '[]');
    return Array.isArray(dato) ? dato : [];
  } catch { return []; }
}
function guardarSolicitudes(lista) { localStorage.setItem(CLAVE_SOLICITUDES, JSON.stringify(lista)); }
function formatoFecha(valor) {
  if (!valor) return '—';
  const partes = valor.split('-');
  return partes.length === 3 ? `${partes[2]}/${partes[1]}/${partes[0]}` : valor;
}
function mostrarMensaje(elemento, texto, tipo) {
  elemento.textContent = texto;
  elemento.className = `mensaje ${tipo}`;
}
function generarMensaje(s) {
  return [
    '📚 SOLICITUD DE LICENCIA ESTUDIANTIL',
    'U.E. Eduardo Abaroa - El Villar',
    '',
    `Código: ${s.id}`,
    `Estudiante: ${s.nombres}`,
    `Curso: ${s.curso}`,
    `Fecha solicitada: ${formatoFecha(s.fechaLicencia)}`,
    `Motivo: ${s.motivo}`,
    `Registrada: ${new Date(s.fechaSolicitud).toLocaleString('es-BO')}`,
    s.tieneAdjunto ? '📎 El estudiante indica que tiene un justificativo. Debe enviarlo por separado.' : '',
    '',
    'Solicito la revisión de la presente licencia.'
  ].filter(x => x !== null && x !== undefined).join('\n');
}
function urlWhatsApp(s, telefono = WHATSAPP_DIRECTOR) {
  return `https://wa.me/${telefono}?text=${encodeURIComponent(generarMensaje(s))}`;
}
function crearBotonWA(s, tipo = 'director') {
  const a = document.createElement('a');
  a.className = 'boton boton-enviar';
  const asesor = ASESORES[s.curso];
  a.href = urlWhatsApp(s, tipo === 'asesor' && asesor ? asesor.telefono : WHATSAPP_DIRECTOR);
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.textContent = tipo === 'asesor' && asesor ? `Abrir WhatsApp de Prof. ${asesor.nombre}` : 'Abrir WhatsApp del director';
  return a;
}
// Implementación local SHA-256: también permite abrir el archivo mediante file://.
function hashSHA256(texto) {
  const bytes=new TextEncoder().encode(texto);
  const K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
  const H=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  const n=bytes.length, size=Math.ceil((n+9)/64)*64, msg=new Uint8Array(size);
  msg.set(bytes); msg[n]=128; const bits=BigInt(n)*8n;
  for(let i=0;i<8;i++)msg[size-1-i]=Number((bits>>BigInt(i*8))&255n);
  const r=(x,n)=>(x>>>n)|(x<<(32-n));
  for(let off=0;off<size;off+=64){
    const w=new Uint32Array(64);
    for(let i=0;i<16;i++){const j=off+i*4;w[i]=((msg[j]<<24)|(msg[j+1]<<16)|(msg[j+2]<<8)|msg[j+3])>>>0;}
    for(let i=16;i<64;i++){const s0=r(w[i-15],7)^r(w[i-15],18)^(w[i-15]>>>3),s1=r(w[i-2],17)^r(w[i-2],19)^(w[i-2]>>>10);w[i]=(w[i-16]+s0+w[i-7]+s1)>>>0;}
    let [a,b,c,d,e,f,g,h]=H;
    for(let i=0;i<64;i++){
      const S1=r(e,6)^r(e,11)^r(e,25),ch=(e&f)^(~e&g),t1=(h+S1+ch+K[i]+w[i])>>>0;
      const S0=r(a,2)^r(a,13)^r(a,22),maj=(a&b)^(a&c)^(b&c),t2=(S0+maj)>>>0;
      h=g;g=f;f=e;e=(d+t1)>>>0;d=c;c=b;b=a;a=(t1+t2)>>>0;
    }
    [a,b,c,d,e,f,g,h].forEach((v,i)=>H[i]=(H[i]+v)>>>0);
  }
  return H.map(x=>x.toString(16).padStart(8,'0')).join('');
}
function cargarCursos(select, todos=false) {
  if (typeof ESTUDIANTES === 'undefined') return;
  [...new Set(ESTUDIANTES.map(e=>e.curso))].forEach(c=>{
    const o=document.createElement('option'); o.value=c; o.textContent=c; select.appendChild(o);
  });
}
const formulario = document.getElementById('formularioLicencia');
if (formulario) {
  const cursoSelector=document.getElementById('curso');
  const alumnoSelector=document.getElementById('estudiante');
  const claveAlumno=document.getElementById('claveAlumno');
  cargarCursos(cursoSelector);
  cursoSelector.addEventListener('change',()=>{
    alumnoSelector.replaceChildren();
    const inicial=document.createElement('option'); inicial.value=''; inicial.textContent='Selecciona tu nombre'; alumnoSelector.appendChild(inicial);
    ESTUDIANTES.filter(e=>e.curso===cursoSelector.value).forEach(e=>{
      const o=document.createElement('option');o.value=e.id;o.textContent=e.nombre;alumnoSelector.appendChild(o);
    });
    alumnoSelector.disabled=!cursoSelector.value; claveAlumno.value='';
  });
  const fecha = document.getElementById('fechaLicencia');
  const fechaRegistro = document.getElementById('fechaRegistro');
  const imagen = document.getElementById('imagen');
  const vistaPrevia = document.getElementById('vistaPrevia');
  const mensaje = document.getElementById('mensaje');
  const botonEnvio = document.getElementById('abrirWhatsApp');
  function limites() {
    const limite = new Date(); limite.setDate(limite.getDate()+7);
    fecha.min = fechaLocalISO(); fecha.max = fechaLocalISO(limite);
  }
  limites();
  fechaRegistro.textContent = new Date().toLocaleString('es-BO');
  imagen.addEventListener('change', () => {
    vistaPrevia.replaceChildren(); vistaPrevia.hidden = true;
    const archivo = imagen.files[0];
    if (!archivo) return;
    if (!archivo.type.startsWith('image/') || archivo.size > 2*1024*1024) {
      imagen.value = '';
      mostrarMensaje(mensaje,'Adjunta solo una imagen de hasta 2 MB.','error'); return;
    }
    const lector = new FileReader();
    lector.onload = () => {
      const img = document.createElement('img'); img.src = lector.result;
      img.alt = 'Vista previa del justificativo'; vistaPrevia.appendChild(img);
      vistaPrevia.hidden = false;
    };
    lector.readAsDataURL(archivo);
  });
  formulario.addEventListener('reset', () => setTimeout(() => {
    vistaPrevia.replaceChildren(); vistaPrevia.hidden = true;
    fechaRegistro.textContent = new Date().toLocaleString('es-BO');
  },0));
  formulario.addEventListener('submit', async evento => {
    evento.preventDefault(); limites();
    if (!formulario.reportValidity()) return;
    if (fecha.value < fecha.min || fecha.value > fecha.max) {
      mostrarMensaje(mensaje,'La fecha debe ser hoy o estar dentro de los próximos 7 días.','error'); return;
    }
    const adjunto = imagen.files[0];
    if (adjunto && (!adjunto.type.startsWith('image/') || adjunto.size > 2*1024*1024)) {
      mostrarMensaje(mensaje,'La imagen debe ser válida y de hasta 2 MB.','error'); return;
    }
    const estudiante=ESTUDIANTES.find(e=>e.id===alumnoSelector.value && e.curso===cursoSelector.value);
    if (!estudiante) { mostrarMensaje(mensaje,'Selecciona un estudiante de la lista.','error'); return; }
    let huella;
    try { huella=await hashSHA256(estudiante.sal+claveAlumno.value); }
    catch { mostrarMensaje(mensaje,'Abre la página desde un sitio HTTPS o localhost para validar la contraseña.','error'); return; }
    if (huella !== estudiante.hash) { mostrarMensaje(mensaje,'Contraseña incorrecta.','error'); return; }
    const solicitud = {
      id: 'LIC-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).slice(2,6).toUpperCase(),
      nombres: estudiante.nombre,
      estudianteId: estudiante.id,
      curso: estudiante.curso,
      fechaLicencia: fecha.value,
      motivo: document.getElementById('motivo').value.trim(),
      fechaSolicitud: new Date().toISOString(),
      estado: 'Pendiente', tieneAdjunto: Boolean(adjunto)
    };
    if (!solicitud.nombres || !solicitud.motivo || !solicitud.curso) {
      mostrarMensaje(mensaje,'Completa todos los campos.','error'); return;
    }
    try {
      const lista = leerSolicitudes(); lista.unshift(solicitud); guardarSolicitudes(lista);
    } catch {
      mostrarMensaje(mensaje,'No se pudo guardar en este navegador. Revisa que el almacenamiento esté disponible.','error'); return;
    }
    formulario.reset(); alumnoSelector.disabled=true; alumnoSelector.replaceChildren(new Option('Primero selecciona el curso',''));
    botonEnvio.replaceChildren(crearBotonWA(solicitud, 'director'), crearBotonWA(solicitud, 'asesor'));
    botonEnvio.hidden = false;
    mostrarMensaje(mensaje,`Licencia ${solicitud.id} guardada en este dispositivo. Abre ambos WhatsApp (director y asesor) y pulsa «Enviar» en cada conversación.`,`exito`);
    // No abrimos otra pestaña automáticamente porque algunos navegadores bloquean los popups.
    // El usuario debe pulsar el botón visible; guardar no demuestra que WhatsApp se haya enviado.
  });
}
function agregarLinea(contenedor, etiqueta, valor) {
  const p = document.createElement('p'); const fuerte = document.createElement('strong');
  fuerte.textContent = etiqueta + ': ';
  p.appendChild(fuerte); p.appendChild(document.createTextNode(valor || '—')); contenedor.appendChild(p);
}
const listaSolicitudes = document.getElementById('listaSolicitudes');
if (listaSolicitudes) {
  cargarCursos(document.getElementById('filtroCurso'));
  const filtroNombre = document.getElementById('filtroNombre');
  const filtroCurso = document.getElementById('filtroCurso');
  const filtroDesde = document.getElementById('filtroDesde');
  const filtroHasta = document.getElementById('filtroHasta');
  const contador = document.getElementById('contador');
  function dibujar() {
    const lista = leerSolicitudes().filter(s =>
      (s.nombres || '').toLocaleLowerCase().includes(filtroNombre.value.trim().toLocaleLowerCase()) &&
      (!filtroCurso.value || s.curso === filtroCurso.value) &&
      (!filtroDesde.value || s.fechaLicencia >= filtroDesde.value) &&
      (!filtroHasta.value || s.fechaLicencia <= filtroHasta.value));
    listaSolicitudes.replaceChildren();
    contador.textContent = `${lista.length} licencia(s) encontrada(s) en este dispositivo`;
    if (!lista.length) {
      const p = document.createElement('p'); p.className = 'vacio';
      p.textContent = 'No hay licencias que coincidan con estos filtros en este navegador.';
      listaSolicitudes.appendChild(p); return;
    }
    lista.forEach(s => {
      const tarjeta = document.createElement('article'); tarjeta.className = 'solicitud';
      const h = document.createElement('h2'); h.textContent = `${s.nombres} — ${s.curso}`; tarjeta.appendChild(h);
      agregarLinea(tarjeta,'Código',s.id);
      agregarLinea(tarjeta,'Estado',s.estado || 'Pendiente');
      agregarLinea(tarjeta,'Fecha de licencia',formatoFecha(s.fechaLicencia));
      agregarLinea(tarjeta,'Fecha de solicitud',new Date(s.fechaSolicitud).toLocaleString('es-BO'));
      agregarLinea(tarjeta,'Motivo',s.motivo);
      if (s.tieneAdjunto) agregarLinea(tarjeta,'Justificativo','La imagen debe enviarse por separado a WhatsApp');
      // Los registros antiguos pueden contener una imagen guardada localmente.
      if (s.imagen) {
        const img = document.createElement('img'); img.src = s.imagen;
        img.className = 'imagen-adjunta'; img.alt = 'Adjunto de registro anterior'; tarjeta.appendChild(img);
      }
      tarjeta.appendChild(crearBotonWA(s, 'director')); tarjeta.appendChild(document.createTextNode(' ')); tarjeta.appendChild(crearBotonWA(s, 'asesor')); listaSolicitudes.appendChild(tarjeta);
    });
  }
  [filtroNombre,filtroCurso,filtroDesde,filtroHasta].forEach(el => {
    el.addEventListener(el.tagName === 'INPUT' && el.type === 'text' ? 'input' : 'change', dibujar);
  });
  document.getElementById('limpiarFiltros').addEventListener('click', () => {
    filtroNombre.value = ''; filtroCurso.value = ''; filtroDesde.value = ''; filtroHasta.value = ''; dibujar();
  });
  document.getElementById('exportarCopia').addEventListener('click', () => {
    const datos = leerSolicitudes();
    const blob = new Blob([JSON.stringify(datos,null,2)], {type:'application/json'});
    const url = URL.createObjectURL(blob); const a = document.createElement('a');
    a.href = url; a.download = `gale3-respaldo-${fechaLocalISO()}.json`;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  document.getElementById('borrarHistorial').addEventListener('click', () => {
    if (confirm('¿Borrar las solicitudes de ESTE navegador? Exporta una copia antes. Esta acción no se puede deshacer.')) {
      localStorage.removeItem(CLAVE_SOLICITUDES); dibujar();
    }
  });
  dibujar();
}
