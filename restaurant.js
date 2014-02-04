	var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
		this.name=name;
		this.calories=calories;
		this.isVegan=vegan;
		this.isGlutenFree=glutenFree;
		this.isCitrusFree=citrusFree;
	}

	FoodItem.prototype.toString = function() {

		if (this.isVegan) {
			var Vegan="vegan";
		} else {
			var Vegan="not vegan";
		};

		if (this.isGlutenFree) {
			var glutenFree= "gluten-free";
		} else {
			var glutenFree="not gluten-free";
		};

		if (this.isCitrusFree) {
			var citrusFree="citrus-free";
		} else {
			var citrusFree="not citrus-free";
		}
		
		return this.name + ": An excellent choice! It has " + this.calories + " calories. " +
		"It is " + Vegan + ". It is " + glutenFree + "," + " and is " + citrusFree + ".";
	}

	var falafel = new FoodItem('Falafel', 250, false, false, false);
	var turkeySandwich = new FoodItem('Turkey Sandwich' , 300 , false, false, true);
	var vegLasagna = new FoodItem('Veggie Lasagna', 430, false, false, true)

	console.log(falafel.toString());
	console.log(turkeySandwich.toString());
	console.log(vegLasagna.toString());

	var Drink = function(name, description, price, foodItemArray) {
		this.name=name;
		this.description=description;
		this.price=price;
		this.foodItemArray=foodItemArray;
	};

	Drink.prototype.toString = function() {
		return this.name + " :A refreshing choice! It is " +
			this.description + " and it costs " + this.price +
			" . It contains " + this.foodItemArray}; 

	var Beer = new Drink('Beer', 'a drink of goodness', '$4');
	console.log(Beer.toString()); LEFT OFF HERE 2/3/14

	var Plate = function(name, description, price, foodItemArray) {
		this.name=name;
		this.description=description;
		this.price=price;
		this.foodItemArray=foodItemArray;
	};

	var Order = function(plateArray) {
		this.plateArray=plateArray;
	};

	var Menu = function(plateArray) {
		this.plateArray=plateArray;
	};

	var Restaurant = function(name, description, menu) {
		this.name=name;
		this.description=description;
		this.menu=menu;
	}

	var Customer = function(dietaryPreference) {
		this.dietaryPreference= dietaryPreference;
	}

