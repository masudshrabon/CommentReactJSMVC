using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CommentReactMVC.Models;

namespace CommentReactMVC.Controllers
{
    public class HomeController : Controller
    {
        private static readonly IList<CommentModel> _comments;

        static HomeController()
        {
            _comments = new List<CommentModel>
            {
                new CommentModel
                {
                    Author = "Shane Warn",
                    Text = "Hello World!"
                },
                new CommentModel
                {
                    Author = "Brain Lara",
                    Text = "Hello React!"
                },
                new CommentModel
                {
                    Author = "Shakib Al-Hasan",
                    Text = "React is awsome."
                }
            };
        }
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Comments()
        {
            return Json(_comments, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddComment(CommentModel comment)
        {
            _comments.Add(comment);
            return Content("Success :)");
        }

    }
}