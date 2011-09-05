<?php

namespace DW\PortfolioBundle\Controller;

use DW\PortfolioBundle\Entity\Enquiry;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class ContactController extends Controller
{
    
    public function indexAction($tpl = "index")
    {
      $title = "Contact";
      $enquiry = new Enquiry();
      $form = $this->createFormBuilder($enquiry)
        ->setRequired(FALSE)
        ->add("name", "text")
        ->add("email", "email")
        ->add("telephone", "text")
        ->add("message", "textarea")
        ->getForm();

      return $this->render("PortfolioBundle:Contact:{$tpl}.html.twig", array("page_title" => $title, "form" => $form->createView()));
    }

    public function pageAction()
    {
      return $this->indexAction($tpl = "page");
    }
}
