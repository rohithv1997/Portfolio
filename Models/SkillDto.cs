namespace Portfolio.Models;

public record SkillDetail(string Title, string Percentage)
{
    public double PercentageInDouble => double.TryParse(Percentage, out var result) ? result : 0;
}

public record SkillDto(SkillDetail[] Skills);