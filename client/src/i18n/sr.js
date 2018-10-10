const loginRegisterValidation = {
  emailInvalid : 'Email adresa nije validna.',
  passwordInvalid: 'Lozinka mora imati najmanje 6 karaktera.'
}

export default {
  layout: {
    yes: "Da",
    no:  "Ne",
    name: "ime",
    email : "email",
    password : "lozinka",
    signup : "registrujte se",
    signin : "prijavite se",
    fetchError: "Nesto nije u redu. Molimo vas osvezite stranicu."
  },
  navLinks: {
    home: "naslovna",
    logout: "odjavite se",
    signup: "registrujte se",
    signin: "prijavite se",
    users: "korisnici",
    posts: "novosti"
  },
  metaData: {
    default: {
      title: "React-Node aplikacija",
      description: "Beta verzija."
    },
    signup: {
      title: "Registracija",
      description: "Pridružite nam se."
    },
    login: {
      title: "Prijavite se",
      description: "Da li ste spremni?"
    },
    posts: {
      title: "Novosti",
      description: ""
    },
    users: {
      title: "Korisnici",
      description: ""
    }
  },
  login: {
    errors: {
      ...loginRegisterValidation,
      incorrectPassword : 'Lozinka je pogrešna.',
      incorrectEmailPassword : 'Email / Lozinka su pogrešni.',
      unknown: 'Molimo vas pokušajte ponovo.'
    },
    loginSuccessful: 'Dobro došli.'
  },
  logout: {
    confirmQuestion: "Da li zaista želite da se odjavite ?"
  },
  user: {
    menu: {
      logout: "Odjavljivanje",
      themes: "Teme",
      toGalleryView: "Prikaži galeriju postova" 
    },
    profile: {
      name: 'Ime i prezime',
      email: 'Email'
    },
    tabs: {
      post: 'Novosti',
      profile: 'Profil'
    },
    noData: "Nema registrovanih korisnika",
    searchPlaceholder: "Pretrazite korisnike po imenu"
  },
  registration: {
    errors: {
      ...loginRegisterValidation,
      nameInvalid: 'Ime nije validno.',
      duplicateEmail: 'Email adresa je već registrovana.',
      unknown: 'Molimo vas pokušajte ponovo.'
    },
    registrationSuccessful: "Čestitamo. Uspešno ste se registrovali.",
    alreadyAccount: "Vec imam nalog"
  },
  api: {
    error: "Nesto nije u redu.",
    postUpload: {
      success: 'Post je uspešno objavljen.',
      error: 'Post nije kreiran.'
    },
    postDelete: {
      success: 'Post je uspešno izbrisan.',
      error: 'Post nije izbrisan.'
    },
    postUpdate: {
      success: 'Post je uspešno ažuriran.',
      error: 'Post nije ažuriran.'
    },
    postCommentDelete: {
      success: 'Komentar uspešno izbrisan.',
      error: 'Komentar nije izbrisan.'
    },
    postCommentUpdate: {
      success: 'Komentar uspešno izmenjen.',
      error: 'Komentar nije izmenjen.'
    },
    postCommentUpload: {
      success: 'Komentar uspešno objavljen.',
      error: 'Komentar nije objavljen.'
    }
  },
  post: {
    showMoreComments: "Pogledaj preostale komentare",
    create: "Podeli neku ideju",
    noData: "Nema objavljenih postova.",
    action: {
      upload: 'Objavi',
      update: 'Ažuriraj',
      cancel: 'Otkaži'
    },
    menu: {
      edit: 'Izmeni post',
      delete: 'Izbriši post'
    }
  }
}