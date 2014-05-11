# == Schema Information
#
# Table name: companies
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Company < ActiveRecord::Base
  has_many :people
  has_many :tasks, as: :taskable

  validates :name, presence: true, length: { minimum: 2 }
end
