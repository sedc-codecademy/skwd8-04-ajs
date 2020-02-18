# Exercise
## Create a class Animal that has:
* name
* type - carnivore/herbivore/omnivore
* age
* size
* eat - a method that checks if the input is an Animal.
	* If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
	* If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name). 
	* If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large. 
	* If the input is not an animal just write: The animal (this animal name) is eating (the input).
* isEaten = default false

# Bonus Homework 
## Data Generation
- generate 10 random bunnies (age from 1-5, size from 1-5);
- generate 10 random wolves (age from 1-15, size from 10-40);
- generate 10 random elephants (age from 1-90, size from 1000-3000);
- generate 10 random pigs (age from 1-20, size from 20-50);

## Testing

- Feed the oldest bunny to the youngest wolf
- Feed an elephant to a wolf
- Feed some lettuce to a bunny
- Feed an elephant to bunny
- Feed the smallest pig to the largest wolf
- Feed the largest pig to the smallest wolf
- Feed a wolf to a pig
- Feed a pig to a pig
- Feed a pig to an elephant
- Feed some lettuce to a pig
- Feed some lettuce to a wolf