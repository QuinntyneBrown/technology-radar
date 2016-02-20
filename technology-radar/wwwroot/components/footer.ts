export class FooterComponent {
    storeOnChange = state => this.token = state.token;
    isLoggedIn = () => this.token != null;
    token;
}