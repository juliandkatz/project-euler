defmodule Problem1 do
  def runIt() do
    iterate(0, 5)
  end

  defp iterate(endValue, endValue) do
  end

  defp iterate(current_value, endValue) do
    IO.puts(current_value)
    next_value = current_value + 1
    iterate(next_value, endValue)
  end
end

Problem1.runIt()
