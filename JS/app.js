// VEHICULE
class vehicle {
    constructor(color, wheels, mark) {
        this.color = color;
        this.wheels = wheels;
        this.mark = mark;
    };
    toStartUp() {
        console.log("Je démarre ma " + this.mark +" "+ this.color + " et elle a toujours " + this.wheels + " roues");
    };
    stopTheCar() {
        console.log("Je dois arreter ma " + this.mark +" "+ this.color + " car les " + this.wheels + " roues sont HS");
    };
};
const voiture = new vehicle('bleu', 4,'mercedes');
voiture.toStartUp();
const voiture2 = new vehicle('rouge', 4, 'ferrari');
voiture2.stopTheCar();



// BIKE
class bike extends vehicle {
    constructor(color, wheels, mark, spokeWheels, kindOfPaint) {
        super(color, wheels, mark);
        this.spokeWheels = spokeWheels;
        this.kindOfPaint = kindOfPaint;
    };
    rideTheBike() {
        console.log("Je me suis acheter un vélo " + this.color + " de la marque " + this.mark + "," + " les " +
        this.wheels + " roues disposes de " + this.spokeWheels + " rayons et la peinture utiliser est l'" +
            this.kindOfPaint );
    };
};
const velo = new bike('vert', 2, 'Btwin',8, 'acrylique');
velo.rideTheBike();


// CAR
class car extends vehicle {
    constructor(color, wheels, mark, insurance, owner) {
        super(color, wheels, mark);
        this.insurance = insurance;
        this.owner = owner;
    };
    carWash() {
        console.log("Je m'appel " + this.owner + ",je possède une voiture " + this.color + " de marque " + this.mark +
        ". " + "Les " + this.wheels + " roues sont sale et je dois la passer au lavage " +"."+ " J'ai eu un accident " +
            "mais heureusement je suis assurer chez "+ this.insurance);
    };
};
const maVoiture = new car('jaune', 4, 'Peugeot', 'allianz', 'Jean-Michel');
maVoiture.carWash()
