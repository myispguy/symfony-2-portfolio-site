<?php

namespace DW\PortfolioBundle\Controller;

use DW\PortfolioBundle\Entity\Enquiry;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller
{
    
    public function indexAction()
    {
        $title = "Welcome";
        return $this->render('PortfolioBundle:Default:index.html.twig', array('page_title' => $title));
    }

    public function technologyAction() {
        $title = "Technology";
        return $this->render('PortfolioBundle:Default:technology.html.twig', array('page_title' => $title));
    }
}
