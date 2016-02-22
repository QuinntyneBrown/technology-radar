export class TechnologyComponent {
    static canActivate = () => [
        "$route","invokeAsync"

    ];
}