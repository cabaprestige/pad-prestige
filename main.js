let cbuxl = document.getElementById("cbuxl");
let cbu = document.getElementById("cbu");
let nombreApodo = document.getElementById("nombreApodo");
let bienvenida = document.getElementById("modal-button2");
let registrar = document.getElementById("modal-button");
let info = document.getElementById("info");
let retiro = document.getElementById("retiro");
let retiroExitoso = document.getElementById("retiroExitoso");
let premioEnviado = document.getElementById("premioEnviado");
let sistemaDePagos = document.getElementById("sistemaDePagos");
let demorasPagos = document.getElementById("demorasPagos");
let sistemaRecomendacion = document.getElementById("consultaporPremio");
let bonificacion = document.getElementById("bonificacion");
let solicitarComprobante = document.getElementById("solicitarComprobante");
let solicitarUsuario = document.getElementById("solicitarUsuario");
let publicidad = document.getElementById("premioDemorado");
let noIngreso = document.getElementById("noIngreso");
let cbuEquivocado = document.getElementById("cbuEquivocado");
let mantenimiento = document.getElementById("mantenimiento");
let soporte = document.getElementById("soporte");
let form = document.getElementById("form");
let form_button = document.getElementById("formButton");
let usuario = document.getElementById("usuario");
let modal = document.getElementById("myModal");
let btn = document.getElementById("pad-button-reg");
let span = document.getElementsByClassName("close")[0];
let usuario2 = document.getElementById("usuario2");
let modal2 = document.getElementById("myModal2");
let btn2 = document.getElementById("pad-button-reg2");
let span2 = document.getElementsByClassName("close2")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  globalThis.inputNombre = document.getElementById("name").value;
  globalThis.inputCBU = document.getElementById("number").value;
  globalThis.inputAlias = document.getElementById("alias").value;

  if (inputNombre.length != 0 && inputCBU != 0 && inputAlias.length != 0) {
    cbuxl.addEventListener("click", () => {
      const texto = `¡Hola! 😄👋🏼
📢 *IMPORTANTE: Antes de realizar una transferencia, por favor consulta el CBU vigente para evitar demoras en la acreditación de tus fichas.*

🔽 *DATOS DEL CBU VIGENTE* 🔽

🔹 *Titular:* ${inputNombre}
🔹 *CBU:* ${inputCBU}
🔹 *ALIAS:* ${inputAlias} 

💰 *CARGA MÍNIMA: $1.000*
*Para comenzar a jugar, haz clic aquí* ➡️ https://azarlatino1.com/

📲 NÚMERO DE WHATSAPP DE RESPALDO: ➡️ 11 3388 4819

📤 *¿Cómo proceder?*
- Realiza la transferencia.
- Envía el comprobante junto con SÓLO tu usuario registrado en la página.

🔞 *No aceptamos jugadores menores de 18 años*. Si detectamos que eres menor de edad y envías dinero, este será devuelto inmediatamente. Te pedimos no hacernos perder el tiempo y respetar esta regla.

*¡Gracias por elegirnos y mucha suerte!* 🍀✨`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    cbu.addEventListener("click", () => {
      const texto = `${inputCBU}`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("alias").value = "";
  } else {
    alert("Por favor, completa todos los datos!!");
  }
});

nombreApodo.addEventListener("click", () => {
  const texto = `¡Hola! 😁✨
🎲 Para crear tu cuenta, *necesito que me envíes tu nombre y apellido completo  para registrarte como jugador*. 👨🏻‍💻

💵 *Mínimo de carga: $1.000*
💵 *Mínimo de retiro: $2.000*
⏰ Horarios de retiros y pagos: Todos los días de 8:00 AM a 00:00 HS (contamos con sistema de pagos, si queres obtener más info no dudes en consultarnos)

⚠️ *Importante:*
🔞 *No aceptamos jugadores menores de 18 años.* Si envías dinero siendo menor de edad, este será devuelto de inmediato. Respetemos las reglas y ahorremos tiempo. 🙏🏼`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

registrar.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario").value;

  const texto = `👑 *USUARIO CREADO* 👑

📲 Para jugar ingrese a https://azarlatino1.com/
*SU USUARIO ES:* ${user}
*CONTRASEÑA:* hola1234

🔞 *SÓLO APTO PARA MAYORES DE 18 AÑOS*

*Para cargar dinero a su cuenta CONSULTE NUESTRO CBU VIGENTE* 📩`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario").value = "";

  modal.style.display = "none";
});


bienvenida.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario2").value;
  console.log(user);

  const texto = `*Te damos la bienvenida!* 😁✨ *(IMPORTANTE LEER EL TEXTO COMPLETO)*

🔑 *Acceso a la plataforma:* 🌐 https://azarlatino1.com

👤 *Usuario:* ${user}
🔒 *Contraseña:* hola1234

⬇️ *Información importante:*
🔹 *Carga mínima:* $1.000
🔹 *Retiro mínimo:* $2.000 (sin límite de retiros por día)
⏰ *Horarios de pagos:* 8:00 AM a 00:00 HS (contamos con sistema de pagos, si queres obtener más info no dudes en consultarnos)

🏦 *CBU vigente:*
🔹 *Titular:* ${inputNombre}
🔹 *CBU:* ${inputCBU}
🔹 *ALIAS:* ${inputAlias}

⚠️ *No transfieras dinero sin consultar el CBU.*

🔞 *No aceptamos jugadores menores de 18 años. Si eres menor, no podrás jugar y el dinero será devuelto.*

📤 *Procedimiento:*
1. Realiza la transferencia.
2. Envía el comprobante junto con tu usuario asignado para cargar las fichas en el sistema.

¡Buena suerte! 🍀`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario2").value = "";

  modal2.style.display = "none";
});

info.addEventListener("click", () => {
  const texto = `¡Hola! 😄 *Somos Caba Prestige.*

📱 *PLATAFORMA*: https://azarlatino1.com/ aquí encontrarás: 
. Slots (maquinitas)
. Ruletas en vivo
. Apuestas deportivas (solo se aceptan apuestas de primera línea) 
. Blackjack
. Baccarat
. Bingo

*Detalles importantes:*
💰 *Depósito mínimo:* $1.000
💰 *Retiro mínimo:* $2.000
💰 *Retiro máximo:* ¡No tenemos límite!
💰 Contamos con un *sistema de pagos* (puede solicitar más info sobre el mismo)

❗🔞 *Reglas del juego:*
No aceptamos jugadores menores de 18 años. Si envías dinero siendo menor, será devuelto. Evita problemas y respeta esta política. ¡Gracias! 🙌🏼

*Indicanos tu nombre y apellido para poder generarte un usuario!* 📥`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retiro.addEventListener("click", () => {
  const texto = `Hola! 🙌🏼 *Para retirar el dinero de su cuenta le solicito los siguientes datos EN ORDEN*: 

➡️ *Usuario registrado en la plataforma*:
➡️ *Monto que desea retirar*:
➡️ *Nombre completo que figura en su cuenta bancaria o digital*:
➡️ *CBU o ALIAS*:

Deben figurar TODOS los datos mencionados anteriormente.

🔺*Los retiros son a partir $2.000 sin excepción*
Una vez que complete los datos, le retiramos las fichas y su premio será enviado al sector de pagos para que efectúen la transferencia. 

🙏🏼 Por favor, le pedimos paciencia mientras procesamos el pago. *El envío del mismo puede demorar un rato*.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retiroExitoso.addEventListener("click", () => {
  const texto = `*SU PREMIO ESTÁ EN FILA* 🏆💰
Las fichas han sido retiradas correctamente de su cuenta. El comprobante de pago será enviado en cuanto se haya procesado.

🙏🏼 Por favor, *NO envíe mensajes* (a menos que quiera realizar otra carga o retirar más fichas) hasta recibir su comprobante. Si lo hace, puede perder su lugar en la fila y el pago se demorará más.

⏳ *El proceso de pago puede demorar entre 1 y 3 horas.* Le agradecemos mucho su paciencia.

⚠️ Si desea retirar más fichas, *avísenos antes de que le realicemos el pago.*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

premioEnviado.addEventListener("click", () => {
  const texto = `*¡Felicitaciones!* 🎉
Su premio ya ha sido enviado 🏆💰. Gracias por jugar con nosotros 😊

🎁 *¡Recomiende nuestra plataforma a sus amigos, familiares o conocidos!* Si alguien se une gracias a su recomendación, recibirá un regalo especial como agradecimiento.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

sistemaDePagos.addEventListener("click", () => {
  const texto = `✅ *Retiros y pagos todos los días de 8 AM a 00:00 HS*. 

⬇️ *Importante*:

*LOS PAGOS SE REALIZAN POR ORDEN DE LLEGADA*. 
🔹 *Retiros a partir de $2.000* con la posibilidad de múltiples retiros al día sin un límite máximo. 
🔹 El *tiempo de espera es de 1 a 3 hs* a partir de que se le retiran las fichas del juego. Tenemos en cuenta la cantidad de premios en fila anteriores al suyo y nuestra disponibilidad de fondos. 
🔹 *Dependiendo del monto ganado y de tus transacciones previas*, el pago puede realizarse en su totalidad, en cuotas o con un plan de pagos gestionado por nuestro equipo de gestión financiera.
🔹  Si nuestras cuentas bancarias no disponen de fondos suficientes, el premio será abonado desde nuestra recaudadora externa, lo que implicará un porcentaje considerable del total de su premio.

*Al utilizar nuestros servicios, aceptas y te comprometes a cumplir con estos términos y condiciones de pago. Gracias por tu confianza y preferencia*. 🙏🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

demorasPagos.addEventListener("click", () => {
  const texto = `Estimado cliente, le informamos que *estamos experimentando demoras en los pagos*⏳ 
Los mismos, los iremos abonando de a tandas, por lo que le pedimos paciencia, ya que si envía varios mensajes, tardaremos más en enviarle el suyo 🙏🏼

*Si quiere continuar jugando, puede cargar fichas de su premio* 😁 Agradecemos su comprensión!`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

consultaporPremio.addEventListener("click", () => {
  const texto = `¡Hola! 👋🏼 Te comento que una vez que retiramos las fichas de tu cuenta, el premio entra en un proceso de pago que puede demorar de 1 a 3 horas ⏳💸. Previo a esto, verás que el cajero te envía un mensaje que indica que NO respondas hasta que se te envíe el premio. Esto nos ayuda a agilizar el proceso y evitar cualquier demora adicional.

*Te pedimos amablemente que seas paciente, ¡en breve te enviamos el pago!* 🙏🏼`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

bonificacion.addEventListener("click", () => {
  const texto = `‼️ *IMPORTANTE: INFO SOBRE LAS BONIFICACIONES* ‼️

Las bonificaciones que se te asignen son para aumentar tus posibilidades de ganar! En el caso que ganes, *se efectúa el retiro de todo (incluyendo la bonificación)* pero esta misma, no se incluye en el pago del premio.💰 
Cualquier consulta que tengas estoy a tu disposición 📩`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

solicitarComprobante.addEventListener("click", () => {
  const texto = `Por favor te solicito que hagas clic donde dice "Compartir comprobante", ya que necesitamos tener los comprobantes con toda la información de transferencia, de esta manera agilizamos la búsqueda de tu deposito. Gracias!`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

solicitarUsuario.addEventListener("click", () => {
  const texto = `Para que podamos cargarle las fichas, *por favor envíe siempre su usuario escrito debajo del comprobante de pago.* 🙌🏼

Es muy importante que lo haga cada vez que comparta un comprobante. ¡Gracias por su comprensión! 😊`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

premioDemorado.addEventListener("click", () => {
  const texto = `Hola! 🙌🏼 Gracias por informarnos que el dinero del premio aún no llegó a tu cuenta. Lamentamos mucho esto, pero a veces, las transferencias bancarias pueden experimentar demoras que no dependen de nosotros. De todas maneras, revisaremos internamente si hubo algún error con el pago.

Es importante tener en cuenta que las transferencias pueden demorar hasta 72 horas hábiles, dependiendo del proceso de recepción de cada banco. Aguarda unos instantes a que un supervisor pueda ingresar en la cuenta a chequear el estado de la transferencia demorada! En breve te informamos.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

noIngreso.addEventListener("click", () => {
  const texto = `Su transferencia aún no ingresó en nuestra cuenta 🤚🏼 En cuanto impacte el pago, le cargaremos las fichas! Aguarde 🙏🏼

*Tenga en cuenta que las transferencias a veces cuentan con demora*.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

cbuEquivocado.addEventListener("click", () => {
  const texto = `¡Hola! 👋🏼
*Lamentamos informarle que envió dinero a un CBU que no está activo en este momento.*
Siempre consulte el CBU antes de hacer una transferencia para evitar este tipo de errores y posibles pérdidas. *Esto fue aclarado previamente.*

Un supervisor revisará si el dinero ha sido transferido a la cuenta equivocada. *Esto puede tardar un poco.*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

mantenimiento.addEventListener("click", () => {
  const texto = `Hola! La plataforma de juegos está experimentando algunas dificultades. Esto es debido a un *mantenimiento* que están realizando en la misma. Por este motivo, es posible que experimente caídas en el servicio sin previo aviso o una demora notable para poder ingresar en la página o al cargar los juegos. 
No te preocupes que estamos al tanto y ya lo reclamamos para que lo puedan solucionar cuanto antes!`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

soporte.addEventListener("click", () => {
  const texto = `¡Hola! 👋🏼 Debido a problemas e inconvenientes con la plataforma, le recomendamos que *se ponga en contacto con nuestro equipo de soporte* accediendo a la sección *"Soporte"* en la página de inicio. El servicio está disponible las 24 horas. Inicie una conversación detallando el problema que experimentó y adjunte capturas de pantalla si es posible. 🛠️💬`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

btn.onclick = function () {
  modal.style.display = "block";
  usuario.focus();
};

span.onclick = function () {
  modal.style.display = "none";
};

btn2.onclick = function () {
  modal2.style.display = "block";
  usuario2.focus();
};

span2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal || event.target == modal2) {
    event.target.style.display = "none";
  }
};
