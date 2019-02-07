export class CustomDesignSelectionModel {
    selectedDressType: string;
    AvailableSizes: Array<string>;
    size: string;
    selectedColor: string;

    constructor() {
        this.selectedColor = '';
        this.size = '';
        this.AvailableSizes = ['SM', 'MD', 'LG', 'XL'];
        this.selectedDressType = '';
    }
}