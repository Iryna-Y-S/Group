json.array!(@students) do |student|
  json.extract! student, :id, :name, :surname, :gender, :date, :skype, :group
  json.url student_url(student, format: :json)
end
