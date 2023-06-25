using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcMovie.Models
{
    public class Movie
    {
        public int Id { get; set; }

        [StringLength(160, MinimumLength = 3, ErrorMessage = "Please Enter a valid Title!")]
        [Required]
        public string? Title { get; set; }

        [Display(Name = "Release Date")]
        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }

        [RegularExpression(@"^[A-Z]+[a-zA-Z\s]*$", ErrorMessage = "Please Enter a Genre!")]
        [Required]
        [StringLength(30)]
        public string? Genre { get; set; }

        [Range(1.00, 100.00, ErrorMessage = "Please Enter a price between 1 and 100")]
        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(10, 2)")]
        public decimal Price { get; set; }

        [RegularExpression(@"^[A-Z]+[a-zA-Z\s]*$", ErrorMessage = "Please Enter a Production company!")]
        [Required]
        [StringLength(70)]
        public string? ProductionComp { get; set; }

        [RegularExpression(@"^[A-Z]+[a-zA-Z0-9""'\s-]*$")]
        [StringLength(15)]
        // [Required]
        public string? Rating { get; set; }

        public string? Image { get; set; }

    }
}

