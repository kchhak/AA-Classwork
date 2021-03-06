# == Schema Information
#
# Table name: likes
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  likeable_type :string           not null
#  likeable_id   :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

  belongs_to :likeable,
    polymorphic: true
end
