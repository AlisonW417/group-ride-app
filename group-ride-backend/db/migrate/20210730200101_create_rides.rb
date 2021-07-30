class CreateRides < ActiveRecord::Migration[6.1]
  def change
    create_table :rides do |t|
      t.string :name
      t.string :starting_location
      t.time :starting_time
      t.date :date
      t.string :level 
      t.string :distance 
      t.text :description
      t.integer :user_id
      t.timestamps
    end
  end
end
