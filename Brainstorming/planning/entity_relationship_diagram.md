# Entity Relationship Diagram

Reference the Creating an Entity Relationship Diagram final project guide in the course portal for more information about how to complete this deliverable.

## Create the List of Tables

Table users {
  id int [pk, increment] 
  username varchar
  email varchar [unique]
  password_hash varchar
  dietary_preference varchar
  profile_image_url varchar
  created_at timestamp
}

Table recipes {
  id int [pk, increment]
  user_id int [ref: > users.id] 
  title varchar
  description text
  cuisine varchar
  type varchar
  image_url varchar
  created_at timestamp
}

Table ingredients {
  id int [pk, increment]
  name varchar
}

Table recipe_ingredients { 
  recipe_id int [ref: > recipes.id]
  ingredient_id int [ref: > ingredients.id]
  quantity varchar
  unit varchar
}

Table meal_plans {
  id int [pk, increment]
  user_id int [ref: > users.id]
  title varchar
  description text
  start_date date
  end_date date
}

Table meal_plan_recipes { 
  meal_plan_id int [ref: > meal_plans.id]
  recipe_id int [ref: > recipes.id]
  planned_date date
}

Table shared_meal_plans {
  id int [pk, increment]
  meal_plan_id int [ref: > meal_plans.id]
  shared_with_user_id int [ref: > users.id] 
}

Table comments { 
  id int [pk, increment]
  recipe_id int [ref: > recipes.id]
  user_id int [ref: > users.id]
  content text
  created_at timestamp
}

Table ratings { 
  id int [pk, increment]
  recipe_id int [ref: > recipes.id]
  user_id int [ref: > users.id]
  rating_value int
  created_at timestamp
}



## Add the Entity Relationship Diagram

## Hold command and click on the screenshot to see the image or go to the milestone2_img folder

![Alt text](<Screenshot 2023-10-30 at 4.37.59 PM.png>)