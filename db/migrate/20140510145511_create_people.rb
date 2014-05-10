class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.integer :company_id
      t.string :first_name
      t.string :last_name
      t.string :city
      t.string :email
      t.string :state
      t.timestamps
    end
    add_index :people, :company_id
  end
end
