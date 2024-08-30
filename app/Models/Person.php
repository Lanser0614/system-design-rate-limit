<?php
declare(strict_types=1);

namespace App\Models;

use App\Repository\PersonRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PersonRepository::class)
 * @ORM\Table(name="persons")
 */
class Person
{

    /**
     * @var int
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\Column(type="string")
     */
    private string $firstName;

    /**
     * @ORM\Column(type="string")
     */
    private string $lastName;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="persons")
     */
    private User $user;


}
