class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.text :name, null: false 
      t.text :email, null: false

      t.timestamps
    end
  end
end
