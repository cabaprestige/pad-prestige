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
      const texto = `✅ *DATOS DEL CBU VIGENTE* ✅

*Cuenta a nombre de:* ${inputNombre}
*CBU:* ${inputCBU}
*ALIAS:* ${inputAlias}

💸 *MÍNIMO DE CARGA $1.000* 💸
Envíe el comprobante y debajo únicamente su usuario asignado.
💻 https://azarlatino1.com/ 

🚨 *NO ENVÍE DINERO SIN CONSULTAR EL CBU PREVIAMENTE.* Si no consulta y transfiere a una cuenta inactiva, la acreditación de sus fichas se demorará.`;
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
  const texto = `Hola! Para comenzar a jugar con nosotros *te pido tu nombre y apellido* así podemos generarte un usuario! 👨🏻‍💻 
🔞 *SÓLO APTO PARA MAYORES DE 18 AÑOS* 🔞`;
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

📲 Para jugar ingrese aquí https://azarlatino1.com/
*SU USUARIO ES:* ${user}
*CONTRASEÑA:* hola1234

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

  const texto = `Hola! 👑 *Bienvenido/a a Caba Prestige*  

🧑🏻‍💻 *USUARIO*: ${user}
🔐 *CONTRASEÑA*: hola1234
📱 *PLATAFORMA:* https://azarlatino1.com/

🤑 *MÍNIMO DE CARGA*: $1.000
🤑 *MINIMO DE RETIRO*: $2.000
💰 *RETIROS Y PAGOS TODOS LOS DÍAS DE 8 AM A 00 HS*
🔞 *SÓLO APTO PARA MAYORES DE 18 AÑOS* 🔞

⚠️ *RECUERDE CONSULTAR SIEMPRE NUESTRO CBU SEGUNDOS ANTES DE TRANSFERIR*

✅ *Cuenta a nombre de:* ${inputNombre} ✅
*CBU:* ${inputCBU}
*ALIAS:* ${inputAlias}

Envíe el *COMPROBANTE DE TRANSFERENCIA* y debajo del mismo escriba sólo su *USUARIO ASIGNADO* 📩`;
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
  const texto = `¡Hola! 😄 *Somos Caba Prestige, tu casino online de confianza.*

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

Si te interesa y queres que te generemos un usuario responde este mensaje indicándonos tu nombre y apellido! 📥`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retiro.addEventListener("click", () => {
  const texto = `Hola! *Felicidades por tu premio* 🙌🏼 Para retirar el dinero de tu cuenta te solicito los siguientes datos *EN ORDEN*: 

➡️ *Usuario del juego:*
➡️ *Nombre completo que figura en tu cuenta bancaria:*
➡️ *CBU o ALIAS:*
➡️ *Monto que desea desea retirar:*

🔺Los retiros son a partir $2.000 *sin excepción*
Una vez que completes los datos, te retiramos las fichas y tu premio será enviado al sector de pagos para que efectúen la transferencia. 

🙏🏼 Por favor, te pedimos paciencia mientras procesamos tu pago. El envío del mismo *puede demorar un rato*.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retiroExitoso.addEventListener("click", () => {
  const texto = `*SU PREMIO ESTÁ EN FILA* 💸
Las fichas ya fueron retiradas de su cuenta! Cuando el pago esté listo le enviaremos el comprobante del mismo. 

🙏🏼 En caso de que quiera retirar más fichas *POR FAVOR* avísenos antes de que le abonemos, sino, *le recomiendo NO responder hasta que le enviemos el comprobante del pago, de lo contrario perderá el lugar en la fila y su pago se demorará más de lo previsto.* ⚠️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

premioEnviado.addEventListener("click", () => {
  const texto = `*TU PREMIO YA FUE ENVIADO* 👏🏼🥳🎉 
Felicitaciones! 💘 Gracias por jugar con *Caba Prestige* 🙏🏼 Disfrutalo mucho ✨ No te olvides de recomendarnos @caba.prestige.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

sistemaDePagos.addEventListener("click", () => {
  const texto = `✅ *RETIROS Y PAGOS DISPONIBLES TODOS LOS DÍAS DE 8 AM A 00 HS.* 

⬇️ *Importante:*
*LOS PAGOS SE REALIZAN POR ORDEN DE LLEGADA.*
🔹 *Retiros a partir de $2.000:* Se pueden realizar múltiples retiros al día sin un límite máximo. 
🔹 *Tiempo de espera:* El proceso del pago puede demorar entre 1 a 3 hs a partir de que se le retiran las fichas del juego. 
🔹 *Al momento de abonar se tiene en cuenta:* Cantidad de premios en fila y nuestra disponibilidad de fondos.
🔹 *Pagos en cuotas:* Dependiendo del monto ganado y de tus transacciones previas, el pago puede realizarse en su totalidad, en cuotas o con un plan de pagos gestionado por nuestro equipo de pagos.
🔹 *Fondos insuficientes:* Si nuestras cuentas bancarias no disponen de fondos suficientes, utilizaremos nuestra recaudadora externa, lo que implicará un porcentaje del premio como tarifa servicio.`;
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
Los mismos, los iremos abonando de a tandas, por lo que le pedimos paciencia, ya que si envía varios mensajes, tardaremos más en enviarle el suyo 🙏🏼💸

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
  const texto = `Hola! Te comento que una vez que retiramos las fichas de tu cuenta, el premio entra en un proceso de pago que puede demorar de 1 a 3 horas. Previo a esto, vas a ver que el cajero te envía un mensaje que indica que no respondas hasta que se te envíe el premio. Esto nos ayuda a agilizar el proceso de pago y evitar cualquier demora adicional. 
*Te pedimos amablemente que seas paciente que en breve te enviamos el pago!*`;
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
  const texto = `Envíeme *sólo su usuario asignado* debajo del comprobante para poder cargarle las fichas. Y por favor, *recuerde hacerlo siempre* 🙏🏼`;
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
  const texto = `¡Hola! 👋🏼 Lamentamos informarle que *envió dinero a un CBU con el cual no estamos trabajando en este momento.* 
Es fundamental que *consulte el CBU justo antes de realizar una transferencia* para evitar este tipo de inconvenientes y posibles pérdidas de dinero. Esto lo dejamos aclarado previamente!
Por favor, aguarde mientras un supervisor verifica si el dinero ha ingresado en la cuenta equivocada. *Puede demorar un rato.*`;
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
