export default class Inspirations {
    constructor(id, title, description, imageThen, imageToday) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageThen = imageThen;
        this.imageToday = imageToday;
    }

    get htmlContainerData() {
        return `     
        <div class="inspirationContainer">
        <h1>${this.title}</h1>
                <p>
                    ${this.description}
                </p></div><div class="imgContainer">
                <h1>Then<h1>
                <img src="${this.imageThen}" />
                <h1>Today<h1>
                <img src="${this.imageToday}" />
            </div>
        `;
    }

    get htmlSidebarData() {
        return `
        <div class="inspirationItem" id="${this.id}"><h1>${this.title}</h1></div>
        `;
    }
}
