class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.boolean :status, default: false
      t.integer :user_id, null: false
      t.integer :list_id, null: false

      t.timestamps null: false
    end
  end
end
