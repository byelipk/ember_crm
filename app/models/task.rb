# == Schema Information
#
# Table name: tasks
#
#  id            :integer          not null, primary key
#  taskable_id   :integer
#  taskable_type :string(255)
#  subject       :string(255)
#  created_at    :datetime
#  updated_at    :datetime
#

class Task < ActiveRecord::Base
  belongs_to :taskable, polymorphic: true
end
