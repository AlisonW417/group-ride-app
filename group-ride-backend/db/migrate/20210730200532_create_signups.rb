class CreateSignups < ActiveRecord::Migration[6.1]
  def change
    create_table :signups do |t|
      t.integer :user_id
      t.integer :ride_id
      t.boolean :status
      t.timestamps
    end
  end
end
