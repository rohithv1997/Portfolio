namespace PortfolioV2.Models;

public record ExperienceDetail(string Company, string Timeframe, string Description, string[] Skills);

public record ExperienceDto(ExperienceDetail[] Jobs);