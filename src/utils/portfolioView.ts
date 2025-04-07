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
    projectsXPos: ClassProps[] = [];
    constructor(projects: any) {
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

    getProjects(): StyleProps[] {
        const styleProps: StyleProps[] = [];

        if (this.beneath.length > 1) {
            for (let i = 0; i < this.beneath.length; i++) {
                if (i === 0) {
                    styleProps.push({ 
                        marginLeft: "0px", 
                        marginRight: "-100px", 
                        xRotation: 0.5, 
                        yRotation: 1, 
                        zRotation: 0.5, 
                        degree: 80,
                        opacity: 'cover'
                    });
                } else {
                    const percent = (this.xPos - this.projectsXPos[this.beneath[i]].xPos) / (this.dist * (this.beneath.length - i));
                    /*console.log(`percent Ben${i}: `, percent);
                    console.log(`xpos Ben${i}: `, this.xPos);
                    console.log(`Ben${i}: `, this.projectsXPos[this.beneath[i]].xPos);
                    console.log(`dist Ben${i}: `, this.dist * (this.beneath.length - i));
                    console.log(`ben i${i}: `, this.beneath[i]);
                    console.log(`beneath length: `, this.beneath.length);*/

                    const indexPercent = 1 - (i / this.beneath.length);
                    const indexNextPercent = (i === this.beneath.length - 1 ? 0 : 1 - ((i + 1) / this.beneath.length));
                    

                    const maxDegree = 80 * indexPercent;
                    const minDegree = 80 * indexNextPercent;

                    /*console.log(`minDegree Ben${i}: `, minDegree);
                    console.log(`maxDegree Ben${i}: `, maxDegree);*/

                    if (i === this.beneath.length - 1) {
                        //console.log(`margin Left: ${((percent * -120) + 20)}`)
                    } else {
                        //console.log(`margin Left: ${-100}`)
                    }

                    styleProps.push({ 
                        marginLeft: `${(i === this.beneath.length - 1 ? (percent * -120) + 20 : -100)}px`, 
                        marginRight: `${(i === this.beneath.length - 1 ? (percent * -120) + 20 : -100)}px`,
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
                marginLeft: `${20 * (1 - percent)}px`, 
                marginRight: `${(percent * -120) + 20}px`, 
                xRotation: 0.5, 
                yRotation: 1, 
                zRotation: 0.5, 
                degree: 80 * percent ,
                opacity: 'cover'
            });
        }

        for (let i = 0; i < this.focus.length; i++) {
            /*if (i === 0 && this.beneath.length > 0) {
                const percent = (this.projectsXPos[this.focus[i]].xPos - this.xPos) / this.dist;
                /*console.log(`xpos left: `, this.xPos);
                console.log(`focus left: `, this.projectsXPos[this.focus[i]].xPos);
                console.log("percent left: ", percent);

                styleProps.push({ 
                    marginLeft: `20px`, 
                    marginRight: "20px", 
                    xRotation: 0.5, 
                    yRotation: 1, 
                    zRotation: 0.5, 
                    degree: 0,
                    z: this.projectsXPos.length
                });
            } else if (i === this.focus.length - 1) {
                const percent = ((this.projectsXPos[this.focus[i]].xPos) - (this.xPos + this.onScreen - this.dist)) / this.dist;
                /*console.log(`xpos right: `, this.xPos + this.onScreen - this.dist);
                console.log(`focus right: `, this.projectsXPos[this.focus[i]].xPos);
                console.log("percent right: ", percent);
                styleProps.push({ 
                    marginLeft: "20px", 
                    marginRight: `${(percent * -120) + 20}px`, 
                    xRotation: 0.5, 
                    yRotation: 1, 
                    zRotation: 0.5, 
                    degree: 0,
                    z: this.projectsXPos.length
                });
            } else {*/
                styleProps.push({ 
                    marginLeft: "20px", 
                    marginRight: "20px", 
                    xRotation: 0.5, 
                    yRotation: 1, 
                    zRotation: 0.5, 
                    degree: 0,
                    z: this.projectsXPos.length,
                    opacity: ''
                });
            //}
        }

        if (this.above.length > 1) {
            for (let i = 0; i < this.above.length; i++) {
                if (i === this.above.length - 1) {
                    styleProps.push({ 
                        marginRight: "0px", 
                        marginLeft: "-100px", 
                        xRotation: 0.5, 
                        yRotation: -1, 
                        zRotation: -0.5, 
                        degree: 80,
                        z: 1,
                        opacity: 'cover'
                    });
                } else {
                    const percent = (this.projectsXPos[this.above[i]].xPos - (this.xPos + this.onScreen)) / (this.dist * (i + 1));
                    /*console.log(`percent above${i}: `, percent);
                    console.log(`xpos above${i}: `, this.xPos + this.onScreen);
                    console.log(`above${i}: `, this.projectsXPos[this.above[i]].xPos);
                    console.log(`dist above${i}: `, this.dist * i);*/

                    const indexPercent = i / this.above.length;
                    const indexNextPercent = (i + 1) / this.above.length;

                    const minDegree = 80 * indexPercent;
                    const maxDegree = 80 * indexNextPercent;

                    styleProps.push({ 
                        marginLeft: `${( i === 0 ? (percent * -120) + 20 : -100)}px`, 
                        marginRight: `${( i === 0 ? (percent * -120) + 20 : -100)}px`,
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
            /*console.log("percent above: ", percent);
            console.log("xpos above: ", this.xPos + this.onScreen);
            console.log("above: ", this.projectsXPos[this.above[0]].xPos);*/

            styleProps.push({ 
                marginRight: `${20 * (1 - percent)}px`, 
                marginLeft: `${(20 * (1 - percent))}px`, 
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
}