import { LightningElement } from 'lwc'; // ✅ Removed @track import

export default class PracticeLwc extends LightningElement {  
    // 1️⃣ Iteration Data
    fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];

    // 2️⃣ Conditional Rendering
    showInfo = false;

    toggleInfo() {
        this.showInfo = !this.showInfo;
    }

    // 3️⃣ Two-Way Binding
    userName = ''; // ✅ No need for @track anymore

    handleChange(event) {
        this.userName = event.target.value;
    }

    // 4️⃣ Simple Login
    email = '';
    password = '';
    isLoggedIn = false;

    handleEmail(event) {
        this.email = event.target.value;
    }

    handlePassword(event) {
        this.password = event.target.value;
    }

    handleLogin() {
        if (this.email && this.password) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
            alert('Please enter Email & Password');
        }
    }

    // 5️⃣ Parent to Child Communication
    parentMessage = 'Hello From Parent';

    //change message (child auto update)
    changeMessage(){
        this.parentMessage = 'Update by Parent at' + new Date().toLocaleTimeString();
    }
}
