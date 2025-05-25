namespace Portfolio.Models;

public record ExperienceDetail(string Company, string Timeframe, string Description, string[] Skills);

public record ExperienceDto(ExperienceDetail[] Jobs);