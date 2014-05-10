class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.references :taskable, polymorphic: true
      t.string :subject
      t.timestamps
    end
    add_index :tasks, :taskable_type
    add_index :tasks, :taskable_id
  end
end
