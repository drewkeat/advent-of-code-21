require_relative './vars.rb'

@directions = @input

@test = [
  {forward: 3},
  {up: 5},
  {forward: 8},
  {down: 3},
  {down: 8},
  {forward: 2}
]

@posH = 0 #13
@posV=0 #6

def calcPos(arr)
  arr.each do |obj|
    dir = obj.keys.first
    amt = obj.values.first
    case dir
      when :forward
        @posH += amt
      when :up
        @posV -= amt
      when :down
        @posV += amt
      else
        return "Invalid directions"
    end
  end
  return @posH * @posV
end

puts calcPos(@directions)