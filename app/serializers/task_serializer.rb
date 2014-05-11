class TaskSerializer < ActiveModel::Serializer
  attributes :id, :subject

  has_one :taskable, polymorphic: true, embed: :id
end
