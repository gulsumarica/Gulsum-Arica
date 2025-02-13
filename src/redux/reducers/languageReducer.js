import { SET_LANGUAGE } from "../actions/actionTypes";

const initialState = {
  selectedLanguage: "tr",
  translations: {
    tr: {
      title1: "Ben bir Frontend Developer' ım",
      desc: "...harika kullanıcı deneyimleri ile sağlam ve ölçeklenebilir ön uç ürünler üretmeyi seven.",
      title2: "Genel Bilgiler",
      aboutMe: "Hakkımda",
      aboutDesc:
        "Yaklaşık üç yıl boyunca IT departmanlarında süreç yönetimi ve iş analizi alanlarında çalıştım. Ancak, bir şeyler üretme tutkum ağır basınca yazılıma yöneldim. Şu anda frontend geliştirme üzerine yoğunlaşıyor, React ve JavaScript ekosisteminde kendimi geliştiriyorum. Kullanıcı dostu, performanslı ve ölçeklenebilir arayüzler oluşturmak için Tailwind CSS, React Router ve çeşitli modern frontend teknolojilerini kullanıyorum. Aynı zamanda Cypress ile test süreçleri üzerine de çalışıyorum.",
      dateOfBirth: "Doğum Tarihi",
      date: "02.10.2000",
      cityOfResidence: "İkamet Şehri",
      city: "Bursa",
      educationStatus: "Eğitim Durumu",
      education: "Bursa Uludağ Ünv. Yönetim Bilişim Sistemleri Lisans, 2022",
      prefferedRole: "Tercih Edilen Rol",
      role: "Frontend",
      projectTitle: "E-commerce",
      projectDesc:
        "Şu anda bir e-ticaret platformu üzerinde çalışıyorum. Proje, React ve Tailwind CSS ile geliştirilmekte olup, React Router v5 kullanılarak çok sayfalı bir yapı sağlanıyor. Ürün listeleme, filtreleme, sepet yönetimi gibi temel e-ticaret işlevlerini kapsıyor. Ayrıca, veri yönetimi için JSON tabanlı bir yapı tercih ediyorum. Proje kapsamında performans optimizasyonu, responsive tasarım ve kullanıcı deneyimi üzerinde yoğunlaşıyorum.",
      sendMessage: "Bir mesaj gönder!",
      sayHello:
        "Bir sorunuz veya öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Buyurun.",
    },
    en: {
      title1: "I am a Frontend Developer",
      desc: "...who likes to craft solid and scalable frontend products with great user experiences.",
      title2: "Basic Information",
      aboutMe: "About me",
      aboutDesc:
        "For about three years, I worked in IT departments focusing on process management and business analysis. However, my passion for creating led me to shift towards software development. I am now focusing on frontend development and improving my skills in the React and JavaScript ecosystem. I use modern frontend technologies such as Tailwind CSS, React Router, and Cypress to build user-friendly, performant, and scalable interfaces. Additionally, I am gaining experience in testing processes with Cypress.",
      dateOfBirth: "Date of birth",
      date: "02.10.2000",
      cityOfResidence: "City Of Residence",
      city: "Bursa",
      educationStatus: "Education Status",
      education:
        "Management Information Systems Bachelor's Bursa Uludağ Unv., 2022",
      prefferedRole: "Preferred Role",
      role: "Frontend",
      projectTitle: "E-commerce",
      projectDesc:
        "I am currently working on an e-commerce platform. The project is being developed using React and Tailwind CSS, with React Router v5 enabling a multi-page structure. It includes core e-commerce functionalities such as product listing, filtering, and cart management. For data management, I prefer a JSON-based approach. The project focuses on performance optimization, responsive design, and enhancing user experience.",
      sendMessage: "Send me a message!",
      sayHello:
        "Got a question or proposal, or just wantto say hello? Go ahead.",
    },
  },
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
