class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :unit_cost, precision: 15, scale: 2, default: 0

      t.timestamps
    end
  end
end
