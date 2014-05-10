# == Schema Information
#
# Table name: people
#
#  id         :integer          not null, primary key
#  company_id :integer
#  first_name :string(255)
#  last_name  :string(255)
#  city       :string(255)
#  email      :string(255)
#  state      :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Person < ActiveRecord::Base
  belongs_to :company
  has_many :tasks, as: :taskable
end
