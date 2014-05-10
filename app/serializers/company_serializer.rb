class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :people, embed: :ids
  has_many :tasks, embed: :ids
end
