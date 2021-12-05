require_relative './vars.rb'

@test = [
  {forward: 5},
  {down: 5},
  {forward: 8},
  {up: 3},
  {down: 8},
  {forward: 2}
]

@posH = 0
@posV = 0
@aim = 0

def calcPos(arr)
  arr.each do |obj|
    dir = obj.keys.first
    amt = obj.values.first

    case dir
      when :forward
        @posH += amt
        @posV += (amt * @aim)
      when :up
        @aim -= amt
      when :down
        @aim += amt
      else
        return "Invalid input"
    end 
  end
  return @posH * @posV
end

print calcPos(@input)