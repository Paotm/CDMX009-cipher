
window.Cliengo = {}; //all Cliengo configs, functions and params goes into this object

window.Cliengo.chatConfig = {
  "companyId" : "5b7eb617e4b024fa00d7f6d7",
  "websiteId" : "5b7eb67ee4b0a570469ee74f",
  "whiteLabelId" : "5887b6ace4b024af6948b5fe",
  "whiteLabelName" : "",
  "googleAdWordsConversionId" : "",
  "googleAnalyticsId" : "",
  "chatbotName" : "Laura",
  "phone" : "",
  "title": "http://convocatoria.laboratoria.la/",
  "businessHoursConfiguration" : null,
  "conversionPixels" : "<!-- Google Code for Conversión Chat Page -->\r\n<script type=\"text\/javascript\">\r\n\/* <![CDATA[ *\/\r\nvar google_conversion_id = 934233377;\r\nvar google_conversion_label = \"5F1nCO2zqYgBEKGKvb0D\";\r\nvar google_remarketing_only = false;\r\n\/* ]]> *\/\r\n<\/script>\r\n<script type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\">\r\n<\/script>\r\n<noscript>\r\n\r\n<div style=\"display:inline;\">\r\n<img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/934233377\/?label=5F1nCO2zqYgBEKGKvb0D&amp;guid=ON&amp;script=0\"\/>\r\n<\/div>\r\n<\/noscript>\r\n\r\n\r\n\r\n",
  "customFeedbackImageUrl" : "",
  "widgetIcon" : "CLIENGO_ORIGINAL",
  "chatWindowColor" : "#43DDA2",
  "cliengoMeetings" : "false",
  "chatWindowTitle" : "Déjanos tus Datos para Postularte",
  "chatWindowInputPlaceholder" : "Escribe un mensaje...",
  "chatInitialMessage" : "Hola, estoy conectada, ¿te puedo ayudar con algo?",
  "chatIsWritingMessage" : " está escribiendo...",
  "chatSaluteTimeInSeconds" : 1,
  "avatarImgUrl": "",
  "labs":{
        },
  "companyLabs": "cvanalysis",
  "planType": "CLIENGO_FREE",
  "vertical": "EDUCATION",
    "formHooksEnabled" : false,
  "automaticRemarketingEnabled" : true,
  "chatEnabled" : false,
        "poweredBy":{
          "text": "Usamos Cliengo ",
          "link": "https://www.cliengo.com/a/publicidadenbuscadores?utm_source=powered_by_cliengo&utm_medium=chat",
          "img":  "https://res.cloudinary.com/hbrrdozyj/image/upload/v1591102869/logo_cliengo_exygpb.png"
      },
    "customPoweredByUtms": "",
  "softDisable": false,
  "hasConvertedLead" : false,   "CDN_URL_DOMAIN" : "//d47r8x2gwo1do.cloudfront.net",
        "WS_CHATBOT_URL" : "wss://chatbot.cliengo.com",
      "sessionPath" : "/s/5b7eb617e4b024fa00d7f6d7/5b7eb67ee4b0a570469ee74f",
  "cacheVersion" : "1438-07062050",
  "debug" : false,
  "whatsAppActive": false,
  "lang" : "es",
  "widgetVersion" : "2.0"
}

var host = 'https://lw.cliengo.com';

var mainClgoScriptId = 'mainclgo';
var mainWspScriptId = 'mainWsp';
var mainclgoScriptExists = document.querySelector('script[id="' + mainClgoScriptId + '"]');

  loadMain();


function loadMain() {
  if(mainclgoScriptExists) {
    console.warn('Cuidado! ya existe un script con id "' + mainClgoScriptId + '", ' +
      'probablemente el script del chat este duplicado en ese sitio!');
  }

  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.id = mainClgoScriptId;
  s.src = host + '/mainclgo.bundle.js';
  s.setAttribute('data-company-id', '5b7eb617e4b024fa00d7f6d7');
  s.setAttribute('data-source-id', '5b7eb67ee4b0a570469ee74f');
  s.setAttribute('data-host', host);
  s.async = true;
  document.body.appendChild(s);
  console.debug('clgo loaded');

  loadWhatsAppWidget();
}

function onCommonsLoad() {
  console.log(commonsClgoScriptId + ' script loaded successfuly.');
  loadMain();
}

// WhatsApp functions
function setwhatsappConfig() {
  }

function loadWhatsAppWidget() {
  }


