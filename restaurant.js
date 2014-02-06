
	var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
		this.name=name;
		this.calories=calories;
		this.isVegan=vegan;
		this.isGlutenFree=glutenFree;
		this.isCitrusFree=citrusFree;
	}

	var hops = new FoodItem('Hops', 150, false, false, true);
	var water = new FoodItem('Water', 0, true, true, true);
	var wheat = new FoodItem('Wheat', 50, true, false, true);
	var beans = new FoodItem('Beans', 100, true, true, true);
	var rice = new FoodItem('Rice',150, true, false, false);
	var cheese = new FoodItem('Cheese', 100, false, true, true);
	var tortilla = new FoodItem('Tortilla', 120, false, false, true);
	var salsa = new FoodItem('Salsa', 50, true, true, false);
	var avocado = new FoodItem('Avocado', 100, true, true, true);
	var spices = new FoodItem('Spices', 30, true, true, false);
	var tequila = new FoodItem('Tequila', 100, true, true, true);
	var margMixer = new FoodItem('Mixer', 100, true, true, false);
	var tripleSec = new FoodItem('TripleSec', 100, true, true, true);
	var chips = new FoodItem('Chips', 100, true, false, false);


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
		
		return this.name + ": This contains " + this.calories + " calories. " +
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
			" . Ingredients: " + this.foodItemArray.join()}; 

	var Plate = function(name, description, price, foodItemArray) {
		this.name=name;
		this.description=description;
		this.price=price;
		this.foodItemArray=foodItemArray;
	};

	Plate.prototype.toString = function() {
		return this.name + " is a " + 
		this.description + "." + "It costs " +
		this.price + "." + "Contains: " + (this.foodItemArray.join(' '));
	}

	Plate.prototype.isItVegan = function() {
		for (var i=0; i<this.foodItemArray.length; i++) {  
			if(!this.foodItemArray[i].isVegan) {return false;};
				   {
					return true;
				}  
			
		}

	}

	Plate.prototype.isItGlutenFree = function() {
		for (var i=0; i<this.foodItemArray.length; i++) {  
				if(!this.foodItemArray[i].isGlutenFree) {return false;};
				{
					return true;
				}  
			
		}

	}

	Plate.prototype.isItCitrusFree = function() {   
		for(var i=0; i<this.foodItemArray.length; i++) {  
				if(!this.foodItemArray[i].isCitrusFree) {return false;};
				   {
					return true;
				}  
			
		}

	}

	var combo = new Plate('Combo', ' mix to make anyone happy' , '$12' , ['burrito', 'enchilada', 'Spanish rice' ])
	console.log(combo.toString());

	var Order = function(plateArray) {
		this.plateArray=plateArray;
	};

	Order.prototype.toString = function() {
		return "You have ordered the following: " + this.plateArray.join();
	}

	var orderTest = new Order(['Burrito plate', 'Pizza Hot Dish'])
	console.log(orderTest.toString());

	var Menu = function(plateArray) {
		this.plateArray=plateArray;
	};

	Menu.prototype.toString = function() {
		return "We offer the following: " + this.plateArray.join();
	}

	var menuTest = new Menu(['Pizza Hot Dish', 'Lasagna', 'Mexican combo', 'Pizza'])
	console.log(menuTest.toString());

	var Restaurant = function(name, description, menu) {
		this.name=name;
		this.description=description;
		this.menu=menu;
	}

	Restaurant.prototype.toString = function() {
		return "Welcome to " + this.name + "! " +
		"We are a " + this.description + "." + 
		" We offer a number of items, listed as follows: " + this.menu.join();
	}

	var newPlace = new Restaurant('Hangout', 'family-owned eatery in the heart of downtown', ['Pizza', 'Spaghetti'])

	console.log(newPlace.toString());

	var Customer = function(dietaryPreference) {
		this.dietaryPreference= dietaryPreference;
	}

	Customer.prototype.toString = function() {
		return "You listed the following as a dietary preference: " + this.dietaryPreference;
	}

	var testCust = new Customer('vegetarian')
	console.log(testCust.toString());


	var burritoPlate = new Plate('Burrito', ' healthy option full of fiber and protein', '$8', [beans, rice, cheese, tortilla, salsa]);
	var guacamolePlate = new Plate('Guacamole plate', 'combo of homemade guacamole and chips', '$5', [avocado, chips, salsa, spices]);
	var margarita = new Drink('House margarita', 'a traditional drink made with the finest liquor', '$5', [margMixer, tripleSec, tequila]);

	console.log(burritoPlate.isItCitrusFree());	
	console.log(guacamolePlate.toString());
	console.log(margarita.toString());

