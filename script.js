function handleGoogleLogin(response){
  const payload = JSON.parse(atob(response.credential.split('.')[1]));

  const user = {
    name: payload.name,
    email: payload.email,
    avatar: payload.picture,
    admin: false
  };

  localStorage.setItem('vv_user', JSON.stringify(user));

  toast('Login Google realizado com sucesso!','ok');

  loadUser();
  go('galeria');
}
