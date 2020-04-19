class Stock < ApplicationRecord
  validates :serial_number, uniqueness: true
end
