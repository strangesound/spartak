<template>
  <transition name="fade">

    <div class="form-popup" id="myForm" @click="$emit('close-modal')">
      <form action="/action_page.php" class="form-container" @click.stop>
        <h2 class="form-head">Скиллс челлендж с блогерами и тренерами академии ФК Спартак</h2>
        <p class="form-datetime">6 июня 13:00—19:22</p>

        <!-- <label for="fname">Фамилия</label> -->
        <input type="text" id="fname" name="firstname" placeholder="Имя">
        <div class="line"></div>

        <!-- <label for="lname">Имя</label> -->
        <input type="text" id="lname" name="lastname" placeholder="Фамилия">
        <div class="line"></div>


        <!-- <label for="email"><b>Email</b></label> -->
        <input type="tel" placeholder="Телефон" name="phone" required>
        <div class="line"></div>



        <!-- <label for="email"><b>Email</b></label> -->
        <input type="text" placeholder="Email" name="email" required>
        <div class="line"></div>


        <!-- <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required> -->

        <button type="submit" class="btn">Записаться на матч</button>
        <button type="button" class="cancel" @click="$emit('close-modal')"></button>

      </form>
    </div>

  </transition>

</template>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active до версии 2.1.8 */
  {
  opacity: 0;
}


/* Button used to open the contact form - fixed at the bottom of the page */
/* .open-button {
  background-color: #555;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  bottom: 23px;
  right: 28px;
  width: 280px;
} */

/* The popup form - hidden by default */
.form-popup {
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, .5);
  /* border: 3px solid #f1f1f1; */
  z-index: 5009;
  transition: .5s;
}

/* Add styles to the form container */
.form-container {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 41vw;
  padding: 0.595vw;
  background-color: var(--colorDark2);
  border: none;
}

/* Full-width input fields */
.form-container input[type=text],
.form-container input[type=tel] {
  display: block;
  width: 100%;
  padding: 0.595vw;
  /* margin: 5px 0 22px 0; */
  border: none;
  background: none;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 1.860vw;
  line-height: 96%;
  /* width: 70%; */
  letter-spacing: -0.01em;
  color: var(--colorOrange);

}

.form-container input[type=text]::placeholder,
.form-container input[type=tel]::placeholder {
  color: var(--colorDark);

}

.line {
  display: block;
  width: 100%;
  height: 1px;
  background-color: var(--colorDark);
}


/* When the inputs get focus, do something */
.form-container input:focus.form-container input:-webkit-autofill,
.form-container input:-webkit-autofill:hover,
.form-container input:-webkit-autofill:focus,
.form-container input:-webkit-autofill:active,
.form-container input:-internal-autofill-selected {

  background-color: none !important;
  outline: none !important;
  /* box-shadow: 0 0 0 30px white inset !important; */

}


/* Set a style for the submit/login button */
.form-container .btn {
  margin-top: 9.226vw;
}

/* Add a red background color to the cancel button */
/* .form-container .cancel {
  background-color: red;
} */

/* Add some hover effects to buttons */
.form-container .btn:hover,
.open-button:hover {
  opacity: 1;
}

.form-head {
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 1.860vw;
  line-height: 96%;
  width: 70%;
  letter-spacing: -0.01em;
  color: var(--colorLight);
}

.form-datetime {
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 1.860vw;
  line-height: 96%;
  width: 70%;
  letter-spacing: -0.01em;
  color: var(--colorOrange);
  margin-top: 1.786vw;
  margin-bottom: 9.226vw;
}

.cancel {
  display: block;
  position: absolute;
  width: 1.190vw;
  height: 1.190vw;
  top: 0.595vw;
  right: 0.595vw;
  background: none;

  background-image: url(~/assets/images/cancel.svg);
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  transition: 0.3s;


}

.cancel:hover {
  filter: invert();
}


@media (max-width: 575.98px) {

  .form-popup {
    /* position: static; */
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-container {
    position: relative;
    width: 95%;
    padding: 8px;

  }

  .form-head {
    font-size: 6vw;
  }

  .form-datetime {
    font-size: 6vw;

  }

  .form-container input[type=text],
  .form-container input[type=tel] {
    font-size: 5.58vw;
  }
.cancel{
  width: 16px;
  height: 16px;
  margin: 8px 8px;
}

}
</style>

  
<script>
// export default {

//   data() {
//     return {
//       isVisibility: false
//     }
//   },
//   methods: {
//     toggleModal() {
//       this.$emit('toggle-modal');
//     }
//   },
//     props: {
//     isVisible: Boolean,
//   }

// };
</script>
