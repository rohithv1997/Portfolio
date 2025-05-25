namespace PortfolioV2.Models;

public record HomeDto(string Email, string Location, string LinkedIn, string Github, string Resume)
{
    public string EmailLink => $"mailto:{Email}";
}