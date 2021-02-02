import { createGlobalStyle } from 'styled-components';

const GLO = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800");
#navbarTitle, body {
  font-family: "Nunito Sans", sans-serif;
}

body {
  background-color: ${({theme}) => theme.body};
  color: ${({theme}) => theme.text};
}

.navbar {
  background-color: white;
}

.navbar .container-fluid {
  margin: 5px 0;
}

#navbarTitle {
  font-weight: 800;
}

.btn {
  background-color: white;
}

.btn-check:focus + .btn, .btn:focus {
  outline: 0;
  box-shadow: none;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  margin: auto;
}

#par {
  width: 95%;
}

.card-title {
  font-weight: 800;
}
.card-title p {
  margin: 0;
}

.card-text {
  margin: 0;
}

.card-texts {
    margin: 4px;
    margin-left: 0;
}

p span {
  font-weight: 600;
}

i {
    color: ${({theme}) => theme.text};
}

::-webkit-input-placeholder {
    color: ${({theme}) => theme.text};
}

::placeholder {
    color: ${({theme}) => theme.text};
}

button {
  ${'' /* background-color: white; */}
  border: 1px solid ${({theme}) => theme.body};
  border-radius: 0.35rem;
}

.form-control {
    border: 1px solid ${({theme}) => theme.body};
    border-left: 0;
}

#dropdown {
  display: flex;
  flex-direction: row-reverse;
}

.dropdown {
  ${'' /* background-color: antiquewhite; */}
  display: flex;
  align-items: center;
  justify-items: center;
}

.element {
    background-color: ${({theme}) => theme.element};
    color: ${({theme}) => theme.text};
}

.detailBody {
    margin-top: 10vh;
    margin:0 60px;
}

.backBtn {
    padding: 0;
    margin: 2rem 0;
}

.detailBody i{
    background-color: 
}

.flag {
    display: flex;
    align-items: center;
    ${'' /* justify-content: center; */}
    
    padding: 0;
}

#flag {
    max-width: 90%;
    height: auto;
}

.info {
    position: relative;
}

.content {
    max-height: 170px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: auto;
    margin-bottom:10px;
}

.detailBody button {
  border: 2px solid ${({theme}) => theme.button};
  margin: 0 1px;
}

.MODE:hover {
  cursor: pointer;
}

.BTN:focus {
  border: 1px;
  outline: 1px solid cadetblue;
  ${'' /* background-color: black; */}
}

.INP:focus {
  background-color: ${({theme}) => theme.element} !important;
  border: 0 !important;
  outline: 1px solid cadetblue;
  box-shadow: none;
  color: ${({theme}) => theme.text};
}

@media(max-width: 425px) {
  ::-webkit-scrollbar {
    width: 0;
  }
  .FORM {
    ${'' /* display:flex;
    align-items: center;
    justify-content: center; */}
    margin-bottom:15px;
    position: relative;
  }

  #dropdown {
    display: flex;
    flex-direction: row;
  }

  #dropdown,.FORM {
    padding: 0;
  }
  .input-group {
    width: 88vw;
  }

  .input-group button {
    padding: 0 10px;
    padding-left: 15px;
    border-radius: 10%;
  } 

  .input-group input {
    border-radius: 0 5% 5% 0;
    border-right: 1px;
  }

  .flag {
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .content {
    max-height: 1000px;
    margin-bottom: 10px;
  }

  .content p {
    margin: 0;
  }
}
`

export default GLO;