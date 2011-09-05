<?php

namespace DW\PortfolioBundle\Controller;

use DW\PortfolioBundle\Entity\Enquiry;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class TechnologyController extends Controller
{
    
    public function indexAction($tpl = "index")
    {
      $title = "Technology";
      return $this->render("PortfolioBundle:Technology:{$tpl}.html.twig", array("page_title" => $title));
    }

    public function pageAction()
    {
      return $this->indexAction($tpl = "page", null);
    }
}
