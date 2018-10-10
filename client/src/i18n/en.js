const loginRegisterValidation = {
  emailInvalid : 'Email is invalid.',
  passwordInvalid: 'Password must have at least 6 characters.'
}

export default { 
  layout: {
    yes: "Yes",
    no:  "No",
    name: "name",
    email: "email",
    password: "password",
    signup: "sign up",
    signin: "sign in",
    fetchError: "Something wrong. Please refresh the page."
  },
  navLinks: {
    home: "home",
    signup: "sign up",
    signin: "sign in",
    users: "users",
    posts: "posts"
  },
  metaData: {
    default: {
      title: "React-Node app",
      description: "Beta version"
    },
    signup: {
      title: "Sign up",
      description: "Join us."
    },
    login: {
      title: "Sign in",
      description: "Are you ready?"
    },
    posts: {
      title: "Posts",
      description: ""
    },
    users: {
      title: "Users",
      description: ""
    }
  },
  login: {
    errors: {
      ...loginRegisterValidation,
      incorrectPassword : 'Password is incorrect.',
      incorrectEmailPassword : 'Email / Password are incorrect.',
      unknown: 'Please try again.'
    },
    loginSuccessful: 'Welcome.'
  },
  user: {
    menu: {
      logout: "Log out",
      themes: "Themes",
      toGalleryView: "Show posts gallery" 
    },
    profile: {
      name: 'Full name',
      email: 'Email'
    },
    tabs: {
      post: 'News feeds',
      profile: 'Profile'
    },
    noData: "There are no users",
    searchPlaceholder: "search users by name"
  },
  registration: {
    errors: {
      ...loginRegisterValidation,
      nameInvalid: 'Name is invalid',
      duplicateEmail: 'Email address is already registered.',
      unknown: 'Please try again.'
    },
    registrationSuccessful: "Congratulations. You have successfully registered.",
    alreadyAccount: "I already have account"
  },
  logout: {
    confirmQuestion: "Do you really want to unsubscribe?"
  },
  api: {
    error: "something wrong",
    postUpload: {
      success: 'Successfully created.',
      error: 'No created.'
    },
    postDelete: {
      success: 'Successfully deleted.',
      error: 'No deleted.'
    },
    postUpdate: {
      success: 'Successfully updated.',
      error: 'No updated.'
    },
    postCommentDelete: {
      success: 'Successfully deleted.',
      error: 'No deleted.'
    },
    postCommentUpdate: {
      success: 'Successfully updated.',
      error: 'No updated.'
    },
    postCommentUpload: {
      success: 'Successfully created.',
      error: 'No created.'
    }
  },
  post: {
    showMoreComments: "View the remaining comments",
    create: "Share an idea",
    noData: "There are no posts.",
    action: {
      upload: 'Upload',
      update: 'Update',
      cancel: 'Cancel'
    },
    menu: {
      edit: 'Edit post',
      delete: 'Delete post'
    }
  }
}