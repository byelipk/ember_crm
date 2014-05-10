class PersonSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :city, :state

  has_one :company, embed: :id
  has_many :tasks, embed: :ids
end
