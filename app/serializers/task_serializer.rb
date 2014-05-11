class TaskSerializer < ActiveModel::Serializer
  attributes :id, :subject, :taskable_id, :taskable_type
end
