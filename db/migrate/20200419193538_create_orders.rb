class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.references :invoice, foreign_key: true, index: true
      t.references :product, foreign_key: true, index: true
      t.integer :serial_number
      t.decimal :unit_cost, precision: 15, scale: 2, default: 0
      t.integer :quantity
      t.decimal :price

      t.timestamps
    end
  end
end
