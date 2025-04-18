interface ClassProps {
    xPos: number;
    beneath: boolean;
    above: boolean;
}

interface StyleProps {
    marginLeft: string;
    marginRight: string;
    xRotation: number;
    yRotation: number;
    zRotation: number;
    degree: number;
    z?: number;
    opacity: string;
  }

export class PortfolioView {
    dist = 290;
    display = 4;
    onScreen = this.dist * this.display;
    upperLimit = this.dist * this.display;
    beneath: number[] = [];
    focus: number[] = [];
    above: number[] = [];
    xPos = 0;
    cardWidth = 250;
    cardHeight = 200;
    minMargin = 20;
    maxMargin = 100;
    projectsXPos: ClassProps[] = [];
    constructor(projects: any, screenWidth: number, screenHeight: number) {
        console.log("screenWidth: ", screenWidth);
        console.log("screenHeight: ", screenHeight);
        if (screenHeight > screenWidth) {
            this.display = 2;
            this.cardWidth = screenHeight * 0.2;
            this.cardHeight = this.cardWidth * 0.8;
            this.minMargin = this.cardHeight * 0.08;
            this.maxMargin = this.cardHeight * 0.4;
            this.dist = this.cardHeight + 40;
        } else {
            this.cardWidth = screenWidth * 0.112;
            this.cardHeight = this.cardWidth * 0.8;
            this.minMargin = this.cardWidth * 0.08;
            this.maxMargin = this.cardWidth * 0.4;
            this.dist = this.cardWidth + 40;
        }
        this.onScreen = this.dist * this.display;
        this.upperLimit = this.dist * projects.length - this.onScreen - (this.dist - 1);

        let cur = 0;
        for (let i = 0; i < projects.length; i++) {
            if (cur >= this.onScreen) {
                this.projectsXPos.push({ xPos: cur, beneath: false, above: true });
                this.above.push(i);
            } else {
                this.projectsXPos.push({ xPos: cur, beneath: false, above: false });
                this.focus.push(i);
            }
            cur += this.dist;
        }
    }

    moveProjects(speed: number) {
        this.xPos += speed;

        if (this.xPos < 0) {
            this.xPos = 0;
        } else if (this.xPos > this.upperLimit) {
            this.xPos = this.upperLimit;
        }

        for (let i = 0; i < this.projectsXPos.length; i++) {
            if (this.projectsXPos[i].xPos >= this.xPos && this.projectsXPos[i].xPos < this.xPos + this.onScreen) {
                if (this.projectsXPos[i].beneath) {
                    this.projectsXPos[i].beneath = false;
                    this.beneath.splice(this.beneath.indexOf(i), 1);
                    this.focus.unshift(i);
                }
                if (this.projectsXPos[i].above) {
                    this.projectsXPos[i].above = false;
                    this.above.splice(this.above.indexOf(i), 1);
                    this.focus.push(i);
                }
            } else if (this.projectsXPos[i].xPos < this.xPos) {
                if (!this.projectsXPos[i].beneath) {
                    this.projectsXPos[i].beneath = true;
                    this.beneath.push(i);
                    this.focus.splice(this.focus.indexOf(i), 1);
                }
            } else if (this.projectsXPos[i].xPos >= this.xPos + this.onScreen) {
                if (!this.projectsXPos[i].above) {
                    this.projectsXPos[i].above = true;
                    this.above.unshift(i);
                    this.focus.splice(this.focus.indexOf(i), 1);
                }
            }
        }
    }

    getCardDimensions() {
        return {
            width: this.cardWidth,
            height: this.cardHeight,
        }
    }

    getProjects(): StyleProps[] {
        const styleProps: StyleProps[] = [];

        if (this.beneath.length > 1) {
            for (let i = 0; i < this.beneath.length; i++) {
                if (i === 0) {
                    styleProps.push({ 
                        marginLeft: "0px", 
                        marginRight: `-${this.maxMargin}px`, 
                        xRotation: 0.5, 
                        yRotation: 1, 
                        zRotation: 0.5, 
                        degree: 80,
                        opacity: 'cover'
                    });
                } else {
                    const percent = (this.xPos - this.projectsXPos[this.beneath[i]].xPos) / (this.dist * (this.beneath.length - i));

                    const indexPercent = 1 - (i / this.beneath.length);
                    const indexNextPercent = (i === this.beneath.length - 1 ? 0 : 1 - ((i + 1) / this.beneath.length));
                    

                    const maxDegree = 80 * indexPercent;
                    const minDegree = 80 * indexNextPercent;

                    styleProps.push({ 
                        marginLeft: `${(i === this.beneath.length - 1 ? (percent * (-this.minMargin - this.maxMargin)) + this.minMargin : -this.maxMargin)}px`, 
                        marginRight: `${(i === this.beneath.length - 1 ? (percent * (-this.minMargin - this.maxMargin)) + this.minMargin : -this.maxMargin)}px`,
                        xRotation: 0.5, 
                        yRotation: 1, 
                        zRotation: 0.5, 
                        degree: (percent * (maxDegree - minDegree)) + minDegree,
                        opacity: 'cover'
                    });
                }
            }
        } else if (this.beneath.length === 1) {
            const percent = (this.xPos - this.projectsXPos[this.beneath[0]].xPos) / this.dist;
            styleProps.push({ 
                marginLeft: `${this.minMargin * (1 - percent)}px`, 
                marginRight: `${(percent * (-this.minMargin - this.maxMargin)) + this.minMargin}px`, 
                xRotation: 0.5, 
                yRotation: 1, 
                zRotation: 0.5, 
                degree: 80 * percent ,
                opacity: 'cover'
            });
        }

        for (let i = 0; i < this.focus.length; i++) {
            styleProps.push({ 
                marginLeft: `${this.minMargin}px`, 
                marginRight: `${this.minMargin}px`, 
                xRotation: 0.5, 
                yRotation: 1, 
                zRotation: 0.5, 
                degree: 0,
                z: this.projectsXPos.length,
                opacity: ''
            });
        }

        if (this.above.length > 1) {
            for (let i = 0; i < this.above.length; i++) {
                if (i === this.above.length - 1) {
                    styleProps.push({ 
                        marginRight: "0px", 
                        marginLeft: `-${this.maxMargin}px`, 
                        xRotation: 0.5, 
                        yRotation: -1, 
                        zRotation: -0.5, 
                        degree: 80,
                        z: 1,
                        opacity: 'cover'
                    });
                } else {
                    const percent = (this.projectsXPos[this.above[i]].xPos - (this.xPos + this.onScreen)) / (this.dist * (i + 1));

                    const indexPercent = i / this.above.length;
                    const indexNextPercent = (i + 1) / this.above.length;

                    const minDegree = 80 * indexPercent;
                    const maxDegree = 80 * indexNextPercent;

                    styleProps.push({ 
                        marginLeft: `${( i === 0 ? (percent * (-this.minMargin - this.maxMargin)) + this.minMargin : -this.maxMargin)}px`, 
                        marginRight: `${( i === 0 ? (percent * (-this.minMargin - this.maxMargin)) + this.minMargin : -this.maxMargin)}px`,
                        xRotation: 0.5, 
                        yRotation: -1, 
                        zRotation: -0.5, 
                        degree: (percent * (maxDegree - minDegree)) + minDegree,
                        z: (this.above.length - i),
                        opacity: 'cover'
                    });
                }
            }
        } else if (this.above.length === 1) {
            const percent = (this.projectsXPos[this.above[0]].xPos - (this.xPos + this.onScreen)) / this.dist;

            styleProps.push({ 
                marginRight: `${this.minMargin * (1 - percent)}px`, 
                marginLeft: `${(this.minMargin * (1 - percent))}px`, 
                xRotation: 0.5, 
                yRotation: -1, 
                zRotation: -0.5, 
                degree: 80 * percent,
                z: 1,
                opacity: 'cover'
            });
        }

        return styleProps;
    }

    resize(screenWidth: number, screenHeight: number) {
        console.log("resize: ", screenWidth, screenHeight);
        if (screenHeight > screenWidth) {
            this.display = 2;
            this.cardWidth = screenHeight * 0.2;
            this.cardHeight = this.cardWidth * 0.8;
            this.minMargin = this.cardHeight * 0.04;
            this.maxMargin = this.cardHeight * 0.4;
            this.dist = this.cardHeight + 40;
        } else {
            this.display = 4;
            this.cardWidth = screenWidth * 0.112;
            this.cardHeight = this.cardWidth * 0.8;
            this.minMargin = this.cardWidth * 0.08;
            this.maxMargin = this.cardWidth * 0.4;
            this.dist = this.cardWidth + 40;
        }
        this.onScreen = this.dist * this.display;
        this.upperLimit = this.dist * this.projectsXPos.length - this.onScreen - (this.dist - 1);

        let cur = 0;
        this.beneath = [];
        this.focus = [];
        this.above = [];
        this.xPos = 0;
        const projLength = this.projectsXPos.length;
        this.projectsXPos = [];
        for (let i = 0; i < projLength; i++) {
            if (cur >= this.onScreen) {
                this.projectsXPos.push({ xPos: cur, beneath: false, above: true });
                this.above.push(i);
            } else {
                this.projectsXPos.push({ xPos: cur, beneath: false, above: false });
                this.focus.push(i);
            }
            cur += this.dist;
        }
    }

}